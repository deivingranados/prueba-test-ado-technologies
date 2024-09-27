import { useState } from "react";
import { useNavigate } from "react-router-dom";

const titleRegex = /^.{1,50}$/;
const bodyRegex = /^.{1,250}$/;

const HomeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (title: string, body: string) => {
    const isTitleValid = titleRegex.test(title);
    const isBodyValid = bodyRegex.test(body);

    if (!isTitleValid) {
      alert("Debes colocar tu usuario");
    }
    if (!isBodyValid) {
      alert("por favor coloca tu contraseña");
    }
    return isTitleValid && isBodyValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const isValid = validateForm(formData.title, formData.body);
    e.preventDefault();
    if (isValid) {
      navigate("/mainContry");
      window.location.reload();
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="user-input"
          type="text"
          placeholder="User"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <input
          className="password-input"
          placeholder="Password"
          name="body"
          value={formData.body}
          onChange={handleInputChange}
        />
        <button className="form-button " type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default HomeForm;
