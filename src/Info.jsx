export default function Info({ coordinates }) {
  return (
    <div className='map-info-container'>
      <div className='info-left'>
        <p className='info-title'>Starting</p>
        <p className='left-lat'>
          Lat: <span className='lat-value'>{coordinates.startX}</span>
        </p>
        <p className='left-long'>
          Long: <span className='long-value'>{coordinates.startY}</span>
        </p>
      </div>
      <div className='speed'>
        <p>
          <span className='speed-title'>Speed:</span> 20Kmph
        </p>
      </div>
      <div className='info-right'>
        <p className='info-title'>Ending</p>
        <p className='right-lat'>
          Lat: <span className='lat-value'>{coordinates.endX}</span>
        </p>
        <p className='right-long'>
          Long: <span className='long-value'>{coordinates.endY}</span>
        </p>
      </div>
    </div>
  );
}
