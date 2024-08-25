import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleCompanies, lengthOfProducts }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <div>
            <Button
              onClickHandler={handleCompanies}
              value=""
              title="All Products"
            />
            <Button
              onClickHandler={handleCompanies}
              value="Nike"
              title="Nike"
            />
            <Button
              onClickHandler={handleCompanies}
              value="Adidas"
              title="Adidas"
            />
            <Button
              onClickHandler={handleCompanies}
              value="Puma"
              title="Puma"
            />
            <Button
              onClickHandler={handleCompanies}
              value="Vans"
              title="Vans"
            />
          </div>
          <span style={{ fontWeight: "bold" }}>
            Showing <span style={{ color: "red" }}>{lengthOfProducts}</span>{" "}
            products
          </span>
        </div>
      </div>
    </>
  );
};

export default Recommended;
