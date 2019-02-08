package com.cegeka.eventsdashboard.web.admin.dto;

public class UploadFileResponse {
    private String fileName;
    private String fileUri;
    private String fileType;
    private byte[] fileContent;
    private long size;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileUri() {
        return fileUri;
    }

    public void setFileUri(String fileUri) {
        this.fileUri = fileUri;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public long getSize() {
        return size;
    }

    public void setSize(long size) {
        this.size = size;
    }

    public byte[] getFileContent() {
        return fileContent;
    }

    public  void setFileContent(byte[] fileContent) {
        this.fileContent = fileContent;
    }
}
