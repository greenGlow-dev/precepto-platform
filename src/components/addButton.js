import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const AddButton = ({ title, url }) => {
    return (
        <div className='flex items-center'>

            <Link to={url}  className="px-5 py-2 mr-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{title}
            <FontAwesomeIcon icon={faArrowRight}  className='ml-2' />
            </Link>
            
           
        </div>
    )
}

export default AddButton
