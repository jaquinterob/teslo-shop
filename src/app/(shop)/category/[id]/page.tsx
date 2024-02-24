import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;
  let render!: JSX.Element;
  switch (id) {
    case "men":
      return <div>Category {id}</div>;
    case "women":
      return <div>Category {id}</div>;
    case "kids":
      return <div>Category {id}</div>;

    default:
      notFound();
  }
}
