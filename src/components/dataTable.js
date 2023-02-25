import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faFilePen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BoxData } from '../data/boxData'

const DataTable = () => {
    console.log(BoxData)
    return (

        <div className="relative flex pt-2 pl-8 pr-8 overflow-x-auto flex-start ">
            <table className="w-full text-sm text-left text-gray-500 border-2 dark:text-gray-400">
                <thead className="text-xs uppercase text-gray-50 bg-slate-900 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Color
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody >

                    {
                        BoxData.map(({id, name1, color, category, price }) => {
                            return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={id}>
                                    <td class="py-4 px-6">  {name1}</td>
                                    <td class="py-4 px-6">  {color}</td>
                                    <td class="py-4 px-6">  {category}</td>
                                    <td class="py-4 px-6">  {price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>
        </div>

    )
}

export default DataTable
