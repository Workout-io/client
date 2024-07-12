import React, { useRef } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRecordWebcam } from 'react-record-webcam';

const RecordPage = () => {
  const { createRecording, openCamera, startRecording, stopRecording, downloadRecording, activeRecordings } = useRecordWebcam();


  const recordVideo = async () => {
    const recording = await createRecording();
    await openCamera(recording.id);
    await startRecording(recording.id);
  };

  const stopVideo = async (recordingId) => {
    await stopRecording(recordingId);
    await downloadRecording(recordingId);
  };

  return (
    <div className="w-full h-full rounded-xl bg-white drop-shadow-xl px-10 py-5 gap-10">
      <button className="mb-4"> <ArrowBackIcon /> Back</button>
      <div className="flex flex-col justify-center items-center">
        {activeRecordings.map(recording => (
          <div className="flex pt-10 flex-col justify-center items-center" key={recording.id}>
            <video className="w-1/2" ref={recording.webcamRef} autoPlay />
            <video className="w-1/2" ref={recording.previewRef} autoPlay loop />
            <button onClick={() => stopVideo(recording.id)}>Stop Recording</button>
          </div>
        ))}
        <button onClick={recordVideo} style={{ cursor: "pointer", boxShadow: "5px 5px 0px 0px rgb(59, 130, 246, 1)" }}
        className="w-auto h-full flex items-center rounded-md px-5 font-medium bg-blue-400 text-white">Record</button>
      </div>
    </div>
  );
};

export default RecordPage;
