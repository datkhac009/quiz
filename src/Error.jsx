function Error({message}) {
  return (
    <p className="error">
      <span>💥</span> {message || "There was an error fetching questions."}
    </p>
  );
}

export default Error;
