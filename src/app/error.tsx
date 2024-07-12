"use client";


type ErrorPageProps = {
  error: Error;
  reset: () => void;
}; 

const Error = ({ error, reset }: ErrorPageProps) => {
  console.log("Error:::");

  return (
    <div>
      <button onClick={reset}>Reset Error</button>
    </div>
  );
};

export default Error;
