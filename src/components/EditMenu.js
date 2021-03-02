import React from 'react';

const EditMenu = ({colorToEdit, saveEdit, setColorToEdit, setEditing}) => {
    return(<form data-testid="editForm" onSubmit={saveEdit}>
        <legend>edit color</legend>
        <div>
          <label htmlFor="colorName">color name: </label>
          <input
            name="colorName"
            id="colorName"
            onChange={(e) =>
              setColorToEdit({ ...colorToEdit, color: e.target.value })
            }
            value={colorToEdit.color}
          />
        </div>  
      
        <div>
          <label htmlFor="hex">hex code: </label>
          <input
            name="hex"
            id="hex"
            onChange={(e) =>
              setColorToEdit({
                ...colorToEdit,
                code: { hex: e.target.value },
              })
            }
            value={colorToEdit.code.hex}
          />
        </div>
      
        <div className="button-row">
          <button type="submit">save</button>
          <button onClick={() => setEditing(false)}>cancel</button>
        </div>
    </form>);
}

export default EditMenu;