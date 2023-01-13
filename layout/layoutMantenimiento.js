import React from 'react'

export const layoutMantenimiento = () => {
    return (
        <>
            <div className="surface-section px-4 py-5 md:px-6 lg:px-8">
                <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
                    <li>
                        <a className="text-500 no-underline line-height-3 cursor-pointer">Application</a>
                    </li>
                    <li className="px-2">
                        <i className="pi pi-angle-right text-500 line-height-3"></i>
                    </li>
                    <li>
                        <span className="text-900 line-height-3">Analytics</span>
                    </li>
                </ul>
                <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
                    <div>
                        <div className="font-medium text-3xl text-900">Customers</div>
                        <div className="flex align-items-center text-700 flex-wrap">
                            <div className="mr-5 flex align-items-center mt-3">
                                <i className="pi pi-users mr-2"></i>
                                <span>332 Active Users</span>
                            </div>
                            <div className="mr-5 flex align-items-center mt-3">
                                <i className="pi pi-globe mr-2"></i>
                                <span>9402 Sessions</span>
                            </div>
                            <div className="flex align-items-center mt-3">
                                <i className="pi pi-clock mr-2"></i>
                                <span>2.32m Avg. Duration</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 lg:mt-0">
                        <Button label="Add" className="p-button-outlined mr-2" icon="pi pi-user-plus" />
                        <Button label="Save" icon="pi pi-check" />
                    </div>
                </div>
            </div>



        </>
    )
}
