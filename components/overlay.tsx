export default function Overlay({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-[100%] h-[100%] z-[999] opacity-100 fixed  overflow-hidden bg-primary-modal ">
      {children}
    </section>
  );
}
