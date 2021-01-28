import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {


    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () =>{
        setStatus(props.status)
    }, [props.status])

    const onEditMode = () => {
        setEditMode(true)
    }
   const offEditMode = () => {
       setEditMode(false)
       props.updateStatusThank(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={onEditMode}>{props.status || '---'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    onChange={onStatusChange}
                    autoFocus={true}
                    onBlur={offEditMode}
                    value={status}
                />
            </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks
