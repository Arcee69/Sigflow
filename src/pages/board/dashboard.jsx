import React from 'react'
import { Link } from 'react-router-dom';

import Table2 from '../../components/TableTwo'
import TableMenu from '../../components/TableMenu'

import View from "../../assets/icons/view.svg"
import Archive from "../../assets/icons/archive.svg"
import Delete from "../../assets/icons/delete.svg"
import Search from "../../assets/icons/search.svg"


const tableData = [
    {
        id: 1,
        name: "Gotham Asylum",
        date: "10th Aug, 2023",
        status: "Paused"
    },
    {
        id: 2,
        name: "Gotham Asylum",
        date: "10th Aug, 2023",
        status: "Archived"
    },
    {
        id: 3,
        name: "Gotham Asylum",
        date: "10th Aug, 2023",
        status: "Paused"
    },
    {
        id: 4,
        name: "Gotham Asylum",
        date: "10th Aug, 2023",
        status: "Archived"
    },
];

const columns = [
    { 
        Header: "Name", 
        accessor: "name" 
    },
    {   Header: "Creation Date", 
        accessor: "date" 
    },
    { 
        Header: "Status", 
        accessor: "status" 
    },
    { 
        Header: "Action", 
        accessor: "action" 
    },
  ]



const rows = tableData.map((items) => ({
    name:  <div className='text-xs font-normal text-[#34373F]' >{items?.name}</div>,
    date: <div className='text-xs font-normal text-[#34373F]'>{items?.date}</div>,
    status: <div className={`${items?.status === "Paused" ? "bg-[#ECFDF3] text-primary" : "text-white bg-[#E0E0E0] "  } w-[62px]  p-2 text-center rounded-lg text-[10px] font-medium `}>{items?.status}</div>,
    action: 
            <TableMenu
                options={
                    [
                    <Link to="#" key="1" className="flex gap-1 items-center" >
                        <img src={View} alt="View"/>
                        <p className='text-[#34373F] text-[11px]'>View Transformation</p>
                    </Link>,
                    <Link to="#" key="2" className="flex gap-1 items-center">
                        <img src={Archive} alt="Archive"/>
                        <p className='text-[#34373F] text-[11px]'>Archive Transformation</p>
                    </Link>,
                    <Link to="#" key="3" className="flex gap-1 items-center">
                        <img src={Delete} alt="Delete"/>
                        <p className='text-[#AF202D] text-[11px]'>Delete</p>
                    </Link>,
                    ]
                } 
            />,
}

))



const Dashboard = () => {
  return (
    <div className='p-8 md:p-4 mt-2'>
        <div className='flex flex-col md:flex-row md:justify-between gap-2 md:gap-0 md:items-center'>
            <p className='text-[20px] text-[#101828] font-bold'>Transformation</p>
            <div className='flex gap-4'>
                <button className='w-[224px] bg-primary p-2 text-white text-sm p-2 rounded-lg'>Create a new Transformation</button>
                <button className='w-[71px] bg-primary p-2 text-white text-sm p-2 rounded-lg'>Filters</button>
            </div>
        </div>
        <div className='flex md:justify-end mt-5'>
            <input type='text' placeholder='Search' className='border-[#E6E7EC] border-r-0 border-solid border rounded-tl-lg rounded-bl-lg p-2 w-[320px]' />
            <img src={Search} className='bg-[#fff] px-2 mr-2 rounded-tr-lg border-l-0 border-[#E6E7EC] border-solid border rounded-br-lg'/>
        </div>

        <div className='mt-14 bg-[#fff] border-[#E6E7EC] border rounded-md'>
            <Table2 
                data={rows}
                columns={columns}
            />
        </div>

    </div>
  )
}

export default Dashboard