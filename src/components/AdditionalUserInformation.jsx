import React from "react";

function AdditionalUserInformation(userInfo, handleInputChange){
    return(
        <fieldset className="row">
                <legend className="col-form-label col-sm-2 pt-0">Sexo:</legend>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sex" value="M"/>
                        <label className="form-check-label" htmlFor="female">
                            Mujer
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="sex"  value="H"/>
                        <label className="form-check-label" htmlFor="male">
                            Hombre
                        </label>
                    </div>
                </div>
            </fieldset>
    )
}

export default AdditionalUserInformation;

