import React from 'react'

export default function Main(props){
    console.log(props.item)
    return (
        <div className="main-container">
            <img src={props.item.imageUrl} />
            <div className="main-data">
                <div className="map-data">
                    <p className="location">{props.item.location}</p>
                    <a className="google-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}