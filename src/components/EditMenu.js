import React from 'react';

const EditMenu = (props) => {
  const {editColor, setEditColor, saveEdit, toggleEdit} = props;
  
  const handleChange = (e) => {
    if (e.target.name === "colorName") {
      setEditColor({ ...editColor, color: e.target.value })
    } else if (e.target.name === "colorHex") {
      setEditColor({
        ...editColor,
        code: { hex: e.target.value },
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEdit(editColor);
  }

  const handleCancel = () => {
    toggleEdit(false);
  }

  return(<form data-testid="editMenu" onSubmit={handleSubmit}>
      <legend>edit color</legend>
      <label htmlFor="colorName">color name:
        <input
          name="colorName"
          id="colorName"
          onChange={ handleChange}
          value={editColor.color}
        />
      </label>
    
      <label htmlFor="colorHex">hex code:
        <input
          name="colorHex"
          id="colorHex"
          onChange={handleChange}
          value={editColor.code.hex}
        />
      </label>
    
      <div className="button-row">
        <button type="submit" data-testid="submitButton">save</button>
        <button onClick={handleCancel}>cancel</button>
      </div>
  </form>);
}

export default EditMenu;