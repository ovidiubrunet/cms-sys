package com.cegeka.eventsdashboard.service;


import com.cegeka.eventsdashboard.web.admin.dto.UploadFileResponse;
import org.springframework.http.codec.multipart.FilePart;

public interface FileStorage {
    public UploadFileResponse upload(FileType fileType, FilePart filePart);

    public enum FileType {
        DOCUMENT,
        IMAGE,
        PDF
    }
}
