import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FaceScanPage.css';

const SCAN_STAGES = [
  { name: 'Cervical', duration: 2000, progress: 25 },
  { name: 'Thoracic', duration: 2000, progress: 50 },
  { name: 'Lumbar', duration: 2000, progress: 75 },
  { name: 'Coccyx', duration: 2000, progress: 100 },
];

const ALIGNMENT_TIME = 5000;
const ANALYSIS_TIME = 3000;

const FaceScanPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  const [scanStatus, setScanStatus] = useState('Initializing camera…');
  const [isScanning, setIsScanning] = useState(false);
  const [overallProgress, setOverallProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' }
        });

        videoRef.current.srcObject = stream;
        await videoRef.current.play();

        setScanStatus('Camera started. Please step back until your spine appears within the frame.');

        const alignmentTimer = setTimeout(() => {
          startScan(stream);
        }, ALIGNMENT_TIME);

        return () => {
          clearTimeout(alignmentTimer);
          if (videoRef.current && videoRef.current.srcObject) {
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
          }
        };
      } catch (err) {
        console.error("Failed to access camera:", err);
        setScanStatus('Failed to access camera. Please check your permissions or device.');
      }
    };

    startCamera();
  }, []);

  const startScan = (stream) => {
    setIsScanning(true);
    setScanStatus(`Scanning in progress: ${SCAN_STAGES[0].name}`);

    let stageIndex = 0;

    const stageInterval = setInterval(() => {
      stageIndex++;

      if (stageIndex < SCAN_STAGES.length) {
        setScanStatus(`Scanning in progress: ${SCAN_STAGES[stageIndex].name}`);
        setOverallProgress(SCAN_STAGES[stageIndex - 1].progress);
        setCurrentStage(stageIndex);
      } else {
        clearInterval(stageInterval);

        setOverallProgress(100);
        setIsScanning(false);

        setTimeout(() => {
          setScanStatus('Scan successful. Analyzing…');
          setIsAnalyzing(true);

          setTimeout(() => {
            capturePhoto();
            stream.getTracks().forEach(track => track.stop());
            navigate('/match-result');
          }, ANALYSIS_TIME);
        }, SCAN_STAGES[SCAN_STAGES.length - 1].duration);
      }
    }, SCAN_STAGES[stageIndex].duration);
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const viewportRatio = 0.4;
    const maskHeight = video.videoHeight;
    const maskWidth = maskHeight * viewportRatio;
    const maskX = (video.videoWidth - maskWidth) / 2;
    const maskY = 0;

    canvas.width = maskWidth;
    canvas.height = maskHeight;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(video, maskX, maskY, maskWidth, maskHeight, 0, 0, maskWidth, maskHeight);

    const imageDataURL = canvas.toDataURL('image/png');
    sessionStorage.setItem('scannedFacePhoto', imageDataURL);
  };

  return (
    <div className="scan-page-wrapper">
      <div className="face-scan-container">
        <div className="camera-viewport">
          <video ref={videoRef} autoPlay playsInline className="live-video"></video>

          <div className="spine-mask"></div>

          {isScanning && (
            <div className="scan-effect-spine">
              <div className="scan-line-spine"></div>
            </div>
          )}

          {isAnalyzing && (
            <div className="analysis-overlay">
              <div className="analysis-spinner"></div>
            </div>
          )}
        </div>

        <div className="scan-sidebar">
          <h2>{scanStatus}</h2>

          <div className="spine-progress-area">
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>

            <div className="stage-list">
              {SCAN_STAGES.map((stage, index) => (
                <div
                  key={stage.name}
                  className={`stage-item 
                    ${index < currentStage || (overallProgress === 100 && index <= currentStage) ? 'completed' : ''} 
                    ${index === currentStage && isScanning ? 'active' : ''}`}
                >
                  {stage.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default FaceScanPage;