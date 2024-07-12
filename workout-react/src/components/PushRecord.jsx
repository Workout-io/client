import React, { useRef, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRecordWebcam } from 'react-record-webcam';

const RecordPage = () => {
  const { createRecording, openCamera, startRecording, stopRecording, downloadRecording, activeRecordings } = useRecordWebcam();
  const [isRec, setRec] = useState(false);
  const [title, setTitle] = useState(false);

  function backLink() {
    window.location.href = "./";
  }


  const recordVideo = async () => {
    try {
      const recording = await createRecording();
      await openCamera(recording.id);
      await startRecording(recording.id);
      setRec(true);
      setTitle(true);

    } catch (error) {
      console.error('Error recording video:', error);
    }
  };

  const stopVideo = async (recordingId) => {
    try {
      const recorded = await stopRecording(recordingId);
      setRec(false);
      const formData = new FormData();
      formData.append('file', recorded.blob, 'recorded.webm');

    const response = await fetch('https://your-backend-url.com/upload', {
        method: 'POST',
        body: formData,
    });
    } catch (error) {
      console.error('Error stopping video recording:', error);
    }
  };

  return (
    <div className="w-full h-full rounded-xl bg-white drop-shadow-xl px-10 py-5 gap-10">
      <button className="mb-4" onClick={backLink}> <ArrowBackIcon /> Back</button>
      <div className="flex flex-col justify-center items-center">
        {activeRecordings.map(recording => (
          <div className="flex pt-10 flex-col justify-center items-center" key={recording.id}>
            <video className={`w-3/4 ${isRec ? '' : 'hidden'}`} ref={recording.webcamRef} autoPlay />
            <video className={`w-3/4 ${isRec ? 'hidden' : ''}`} ref={recording.previewRef} autoPlay loop />
            <button onClick={() => stopVideo(recording.id)}>Stop Recording</button>
          </div>
        ))}
        <div className={`flex font-semibold text-2xl justify-items-center items-center pt-80 pb-2 ${title ? 'hidden' : 'pt-80'}`}>PUSH UP!</div> 
        <div className={`flex font-medium text-2xl justify-items-center items-center pb-2 ${title ? 'hidden' : ''}`}>3 REPS</div> 

        <button onClick={recordVideo} style={{ cursor: "pointer", boxShadow: "5px 5px 0px 0px rgb(59, 130, 246, 1)" }}
        className="w-auto h-full flex items-center rounded-md px-5 font-medium bg-blue-400 text-white">Record</button>
      </div>
    </div>
  );
};

export default RecordPage;
