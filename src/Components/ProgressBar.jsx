

// Components/ProgressBar.jsx
function ProgressBar({ value, max, predictedDate }) {
  const percentage = Math.min((value / max) * 100, 100);

    return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', height: '20px', width: '100%' }}>
        <div
          style={{
            width: `${percentage}%`,
            backgroundColor: '#4caf50',
            height: '100%',
            borderRadius: '8px',
            transition: 'width 0.5s ease'
          }}
        ></div>
      </div>
      {predictedDate && (
        <p style={{ fontSize: '0.9rem', color: '#555', marginTop: '4px' }}>
          Estimated completion: <strong>{predictedDate}</strong>
        </p>
      )}
    </div>
  );
}

export default ProgressBar;
