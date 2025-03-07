"use client"; 
import React from 'react'
import Map, {Marker} from 'react-map-gl/mapbox';
import { AttributionControl, GeolocateControl , Layer, NavigationControl,
    Popup, Source } from 'react-map-gl/mapbox';
    interface MapBoxRouteProps {
      coordinates: [number, number][]; // Ensuring proper typing
    }
    
    const MapBoxRoute: React.FC<MapBoxRouteProps> = ({ coordinates }) => {
      return (
        <Source
          id="route"
          type="geojson"
          data={{
            type: "Feature",
            geometry: {
              type: "LineString",
              coordinates: coordinates, 
            },
            properties: {}, 
          }}
        >
        <Layer
          type="line"
          layout={{ 'line-join': 'round', 'line-cap': 'square' }}
          paint={{ 'line-color': '#0462d4', 'line-width': 4 }}
        />
      </Source>
  )
}

export default MapBoxRoute