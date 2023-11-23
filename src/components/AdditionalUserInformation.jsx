

function AdditionalUserInformation({userInfo, handleInputChange}){
    return(
        <fieldset className="row" data-testid="additionalUserInformation">
                <legend className="col-form-label col-sm-2 pt-0"><b className="mandatory_field">*</b>Sexo:</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" 
                        type="radio" 
                        name="sex"
                        checked={userInfo.sex === 'M'} 
                        value="M" 
                        onChange={handleInputChange}/>
                        <label className="form-check-label" htmlFor="female">
                            Mujer
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" 
                        type="radio" 
                        name="sex"
                        checked={userInfo.sex==="H"}  
                        value="H"
                        onChange={handleInputChange}/>
                        <label className="form-check-label" htmlFor="male">
                            Hombre
                        </label>
                    </div>
                </div>
            </fieldset>
    )
}

export default AdditionalUserInformation;

