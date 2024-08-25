import "./Category.css";
import Input from "../../components/Input";

function Categories({ handleCategory }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleCategory} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleCategory}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleCategory}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleCategory}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleCategory}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Categories;
