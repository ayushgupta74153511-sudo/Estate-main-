import { useParams } from "react-router-dom";
function EditProperty() {
  const { id } = useParams();
  return (
    <div>
      <h1>Edit Property ID: {id}</h1>
    </div>
  );
}
export default EditProperty;