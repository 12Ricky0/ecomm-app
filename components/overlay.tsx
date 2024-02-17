export default function Overlay({ children }: { children: React.ReactNode }) {
  // { className }: { className: string }
  return (
    <section className="w-[100%] h-[100%] z-[999] overflow-auto opacity-100 fixed bg-primary-modal ">
      {children}
    </section>
  );
}
