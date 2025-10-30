import { RedirectToast } from "@/components/redirectToast";

type RootTemplateProps = {
  children: React.ReactNode;
};

export default function RootTemplate({ children }: RootTemplateProps) {
  return (
    <>
      <>{children}</>
      <RedirectToast />
    </>
  );
}