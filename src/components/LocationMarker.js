import { Icon } from '@iconify/react'
import fireIcon from '@iconify/icons-mdi/fire-alert'
import waterIcon from '@iconify/icons-mdi/water-alert'
import volcanoIcon from '@iconify/icons-mdi/mountain'
import iceIcon from '@iconify/icons-mdi/snowflake'

const LocationMarker = ({ lat, lng, onClick, type }) => {
    var iconType 
    var iconClass

    if(type === 'fire'){
        iconType= fireIcon
        iconClass='fire-icon'
    }
    if(type === 'water'){
        iconType= waterIcon
        iconClass='water-icon'
    }
    if(type === 'volcano'){
        iconType= volcanoIcon
        iconClass='volcano-icon'
    }
    if(type === 'ice'){
        iconType= iceIcon
        iconClass='ice-icon'
    }


    return (
        <div className="location-marker" onClick={onClick}>
            
            <Icon icon={iconType} className={iconClass} />
        </div>
    )
}

export default LocationMarker
