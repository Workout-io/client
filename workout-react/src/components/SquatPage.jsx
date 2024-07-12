import React, { useRef, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRecordWebcam } from 'react-record-webcam';

const RecordPage = ({sets}) => {
  const nol = parseInt(sets);
  console.log(nol);
  const { createRecording, openCamera, startRecording, stopRecording, downloadRecording, activeRecordings } = useRecordWebcam();
  const [isRec, setRec] = useState(false);
  const [title, setTitle] = useState(false);

  function backLink() {
    window.location.href = "./";
  }


  const recordVideo = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
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
      const blob = new Blob([recorded.blob], { type: 'video/webm' });

      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'dumbell.webm';
      document.body.appendChild(a);
      a.click();

      URL.revokeObjectURL(url);
      document.body.removeChild(a);
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
        <div className={`flex font-semibold text-2xl justify-items-center items-center pt-80 pb-2 ${title ? 'hidden' : 'pt-80'}`}>DUMBELL CURL!</div> 
        <div className={`flex font-medium text-2xl justify-items-center items-center pb-2 ${title ? 'hidden' : ''}`}>8 REPS</div> 

        <button onClick={recordVideo} style={{ cursor: "pointer", boxShadow: "5px 5px 0px 0px rgb(59, 130, 246, 1)" }}
        className="w-auto h-full flex items-center rounded-md px-5 font-medium bg-blue-400 text-white">Record</button>
      </div>
    </div>
  );
};

export default RecordPage;
