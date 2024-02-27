export default function Overlay({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-[100%] h-[100%] z-[999] overflow-y-scroll opacity-100 fixed bg-primary-modal "
      // className="overlay z-[999]"
    >
      {children}
    </div>
  );
}
