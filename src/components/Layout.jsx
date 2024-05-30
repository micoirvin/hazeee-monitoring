export default function Layout(props) {
  return (
    <div className="max-w-[84rem] mx-auto px-4 sm:px-8 pt-8 pb-24">
      <div className="max-lg:max-w-[40rem] grid lg:grid-cols-[3fr_2fr] gap-10">
        {props.children}
      </div>
    </div>
  );
}
