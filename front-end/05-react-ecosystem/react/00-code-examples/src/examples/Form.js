import React, { useState } from "react";

export const Form = () => {
  // const [name, setName] = useState("");
  // const [language, setLanguage] = useState("javascript");
  // const [drinks, setDrinks] = useState([]);
  // const [gender, setGender] = useState("masculino");
  // const [image, setImage] = useState({});
  // const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({});

  function handleInputChange(event) {
    const { target } = event;
    const { type, name, value } = target;

    if (type === "checkbox") {
      const drinks = formData.drinks || [];

      console.log(drinks);

      if (target.checked) {
        const drinksUpdated = [...drinks, value];

        setFormData({ ...formData, [name]: drinksUpdated });
        return;
      }

      const drinksUpdated = drinks.filter((drink) => drink !== value);

      setFormData({ ...formData, [name]: drinksUpdated });
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleFilesChange({ target }) {
    setFormData({
      ...formData,
      file: target.files[0],
    });
  }

  function onSubmit(event) {
    event.preventDefault();
    // const data = {
    //   name,
    //   language,
    //   drinks,
    //   image,
    //   description,
    // };
    console.log(formData);
  }

  return (
    <>
      <h1>Formulário em React</h1>
      <form onSubmit={onSubmit}>
        {/* Input */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formData.name || ""}
          />
        </label>
        {/* Select */}
        <label>
          Language:
          <select
            value={formData.language || ""}
            name="language"
            onChange={handleInputChange}
          >
            <option value="">Selecione</option>
            <option value="javascript">Javascript</option>
            <option value="c#">C#</option>
            <option value="python">Python</option>
          </select>
        </label>
        {/* Checkbox */}
        <div className="checks">
          Drink: <br />
          <label>
            <input
              type="checkbox"
              name="drinks"
              value="cafe"
              checked={formData.drinks && formData.drinks.includes("cafe")}
              onChange={handleInputChange}
            />
            Café
          </label>
          <label>
            <input
              type="checkbox"
              name="drinks"
              value="cha"
              checked={formData.drinks && formData.drinks.includes("cha")}
              onChange={handleInputChange}
            />
            Chá
          </label>
        </div>
        {/* Radio */}
        <div className="radios">
          Gender: <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="masculino"
              checked={formData.gender === "masculino"}
              onChange={handleInputChange}
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="feminino"
              checked={formData.gender === "feminino"}
              onChange={handleInputChange}
            />
            Feminino
          </label>
        </div>

        {/* Input file */}
        <label>
          Photo:
          <input type="file" onChange={handleFilesChange} accept="image/*" />
        </label>

        {/* Textarea */}
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
          />
        </label>
        <hr />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};
