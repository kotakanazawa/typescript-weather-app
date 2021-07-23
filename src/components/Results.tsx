type ResultsPropsType = {
  results: {
    country: string,
    cityName: string,
    temperature: string,
    conditionText: string
    icon: string
  }
}

const Results = (props: ResultsPropsType) => {
  return (
    <div>
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.temperature && <div>{props.results.temperature}<span>度</span></div>}
      {props.results.conditionText && <div>{props.results.conditionText}</div>}
      {props.results.icon &&
        <div>
          <img src={props.results.icon} alt="icon" />
          <span>{props.results.conditionText}</span>
        </div>}
    </div>
  )
}

export default Results
