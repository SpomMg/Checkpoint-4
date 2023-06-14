/* eslint-disable react/destructuring-assignment */
function Objects(obj) {
  return (
    <div>
      <h6 className="oui">
        {obj.object.title}
        {obj.object.name}
        {obj.object.type}
        {obj.object.value}
        {obj.object.info}
      </h6>
    </div>
  );
}

export default Objects;
