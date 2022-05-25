import { CButton } from '@coreui/react';
import SuggestionInputSearch from "suggestion-react-input-search";


function Nav(props) {
    return (
        <>
            <div className="bg-dark px-2">
                <div className="row text-center">
                    <div className="col-lg-2 col-sm-12">
                        <div className="display-6 text-danger py-1">MBA</div>
                    </div>
                    <div className="col-lg-8 col-sm-8 py-2 ">
                        
                            <SuggestionInputSearch
                                onSubmitFunction={props.onMovieSelect}
                                recentSearches={props.movies}
                                placeholder="Seach for movie ..."
                            />
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