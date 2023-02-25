import React from 'react'
import AddButton from '../components/addButton'
import DataTable from '../components/dataTable'
import Pagination from '../components/pagination'
import Select from '../components/select'

const InboxLayout = () => {
    return (
        <>

            <div className="px-4 py-4  sm:px-6 lg:px-4 gap-4 grid ">
                <div className="flex justify-between mb-2  align-center sm:flex sm:items-center ">
                    <div className="flex">
                        <h1 className="text-2xl font-semibold text-gray-900">Box</h1>
                    </div>
                    
                    <AddButton  title='Add user' url='/inbox/add' />
                </div>



                <Select />


                <DataTable />


                <Pagination />

            </div>

        </>


    )
}

export default InboxLayout
