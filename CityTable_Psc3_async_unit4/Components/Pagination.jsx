import React from 'react'

function Pagination({current,onChange}) {
    const prev=(
        <button onClick={()=>onChange(current-1)} disabled={current===1}>
            PREV
        </button>
    )
    const currentPage = <button>{current}</button>;
    const next = <button disabled={current===4} onClick={() => onChange(current + 1)}>NEXT</button>;
  return (
    <div>
      {prev}
      {currentPage}
      {next}
    </div>
  )
}

export default Pagination
