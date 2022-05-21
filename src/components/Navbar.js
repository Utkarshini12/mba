import { CButton } from '@coreui/react';


function Nav() {
    return (
        <>
            <div className="bg-dark px-2">
                <div className="row text-center">
                    <div className="col-lg-2 col-sm-12">
                        <div className="display-6 text-danger py-1">MBA</div>
                    </div>
                    <div className="col-lg-8 col-sm-8 py-2 ">
                        <input type="search" className="form-control" placeholder="Search" />
                    </div>
                    <div className="col-lg-2 p-2 col-sm-4 ">
                        <CButton type="submit" color="danger" className='px-3' >
                            Login
                        </CButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;