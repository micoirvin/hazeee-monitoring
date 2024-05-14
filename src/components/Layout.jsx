export default function Layout(props) {
  return (
    <div className="max-w-[80rem] mx-auto px-8">
      <div className="grid lg:grid-cols-[3fr_2fr] lg:gap-12 lg_2:gap-16">
        {props.children}
      </div>
    </div>
  );
}
