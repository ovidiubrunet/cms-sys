package com.cegeka.eventsdashboard.service;

import com.cegeka.eventsdashboard.domain.Upload;
import com.cegeka.eventsdashboard.exception.FileStorageException;
import com.cegeka.eventsdashboard.repository.UploadRepository;
import com.cegeka.eventsdashboard.web.admin.dto.UploadFileResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.env.Environment;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;
import reactor.core.scheduler.Scheduler;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Service
public class FileStorageService implements FileStorage {

    private UploadRepository uploadRepository;
    private static final String FILE_URI = "/resource";
    private final Path fileStorageLocation;

    @Autowired
    private Scheduler scheduler;

    public FileStorageService(UploadRepository uploadRepository, Environment environment) {
        this.uploadRepository = uploadRepository;
        this.fileStorageLocation = Paths.get(new ClassPathResource(environment.getRequiredProperty("upload.path")).getPath())
                .toAbsolutePath().normalize();

        createUploadDirectory();
    }

    /**
     * @param fileType
     * @param filePart
     * @return
     */
    public UploadFileResponse upload(FileType fileType, FilePart filePart) {

        //target location e.g. uploads/filename.extension
        Path targetLocation = fileStorageLocation.resolve(filePart.filename());

        //transfer file from temp to uploads/filename.extension
        File file = transferFile(filePart, targetLocation);

        //hash content file to md5
        String digest = getMD5HashedContent(file);

        //get extension of the file
        Optional<String> fileExtension = getFileExtension(filePart);

        //upload response
        UploadFileResponse uploadFileResponse = new UploadFileResponse();

        //if different then image return null
        if (fileType != FileType.IMAGE) {
            return uploadFileResponse;
        }

        // upload response URI of the hashed file
        if (fileExtension.isPresent()) {
            String uploadUri = String.format("%s/%s.%s", FILE_URI, digest, fileExtension.get());
            uploadFileResponse.setFileUri(uploadUri);
        }

        //save to db
        Upload upload = saveFileToDB(fileType, filePart, digest);

        //upload response real filename and file type
        uploadFileResponse.setFileName(upload.getFileName());
        uploadFileResponse.setFileType(fileType.name());

        //digest target location e.g. uploads/(md5).extension
        String digestName = String.format("%s.%s", Optional.ofNullable(digest).orElse(""), fileExtension.orElse(""));
        Path digestTargetLocation = fileStorageLocation.resolve(digestName);

        //move file from targetLocation to digestTargetLocation
        renameFile(targetLocation, digestTargetLocation);
        uploadFileResponse.setFileContent(getBytesFromFiles(digestTargetLocation));


        return uploadFileResponse;
    }

    /**
     * @param filePart
     * @param targetLocation
     * @return
     */
    private File transferFile(FilePart filePart, Path targetLocation) {
        File file = new File(targetLocation.toString());
        filePart.transferTo(file);
        return file;
    }

    private Upload saveFileToDB(FileType fileType, FilePart filePart, String digest) {
        Upload upload = new Upload();
        upload.setFileName(filePart.filename());
        upload.setFileType(fileType.name());
        upload.setDateUploaded(new Date(Calendar.getInstance().getTime().getTime()));
        upload.setFileUri(digest);
        upload.setFileSize(filePart.headers().getContentLength());
        uploadRepository.save(upload);
        return upload;
    }


    /**
     * @param targetLocation
     * @param digestTargetLocation
     */
    private  Path renameFile(Path targetLocation, Path digestTargetLocation) {

        try {
            return Files.move(targetLocation, digestTargetLocation);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return targetLocation;
    }

    /**
     * @param filePart
     * @return
     */
    private Optional<String> getFileExtension(FilePart filePart) {
        //get extension
        return Optional.of(filePart.filename())
                .filter(fileExt -> fileExt.contains("."))
                .map(fileExt -> fileExt.substring(filePart.filename().lastIndexOf(".") + 1));
    }

    /**
     * Create upload directory
     */
    private void createUploadDirectory() {
        try {
            Files.createDirectories(fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    private byte[] getBytesFromFiles(Path filePath) {
        try {
            return Files.readAllBytes(filePath);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @param file
     * @return
     */
    private String getMD5HashedContent(File file) {

        String digest = null;

        try (FileInputStream fin = new FileInputStream(file)) {
            //hash based on content
            digest = DigestUtils.md5DigestAsHex(fin);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return digest;
    }
}
