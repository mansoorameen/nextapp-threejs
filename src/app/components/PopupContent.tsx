interface PopupData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface FetchResult {
  data: PopupData[];
  error: string | null;
}

const getData = async (): Promise<FetchResult> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = (await res.json()) as PopupData[];

    return { data, error: null };
  } catch (error: unknown) {
    let errorMessage = "Some error occured. Please try again";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Error fetching data:", errorMessage);
    return { data: [], error: errorMessage };
  }
};

const PopupContent: React.FC = async () => {
  const { data, error } = await getData();

  return (
    <div className="w-[500px] p-8 bg-white rounded shadow-lg">
      {data?.length ? (
        <>
          <h2 className="mb-4 text-lg font-bold">
            {error ? "Error" : data[0]?.title}
          </h2>
          <p>{error ? error : data[0]?.body}</p>
        </>
      ) : (
        <h2 className="mb-4 text-lg font-bold">No Data Found</h2>
      )}
    </div>
  );
};

export default PopupContent;
