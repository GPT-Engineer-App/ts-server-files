import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FileManagement = () => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      setFiles([...files, selectedFile]);
      setSelectedFile(null);
    }
  };

  const handleFileDelete = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle>File Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <Input type="file" onChange={handleFileChange} />
          <Button onClick={handleFileUpload} className="ml-2">Upload</Button>
        </div>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{file.name}</span>
              <Button variant="destructive" onClick={() => handleFileDelete(file.name)}>Delete</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default FileManagement;