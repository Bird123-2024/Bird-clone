"use client";
import { gettingStartedRoutes, routes } from "@/routes/routes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Accordion } from "@/src/components/Accordion";
import { CaretDown, CaretUp } from "phosphor-react";
import { Sections } from "@/types/types";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");
  const [tableOfContents, setTableOfContents] =
    useState<HTMLUListElement | null>(null);

  // get the table of contents
  useEffect(() => {
    const toc = document.querySelector<HTMLUListElement>(
      "#table-of-contents + ul"
    );
    setTableOfContents(toc);
  }, [pathname]);

  // link is active or not active
  const IsActive = (str: string) => {
    const lastPart = pathname.toLocaleLowerCase().split("/").pop();
    return str.toLocaleLowerCase() === "/" + lastPart;
  };

  // get all the section on a page
  const sections = document?.querySelectorAll(".section-title");

  const newIdArr: Sections[] = Array.from(sections).map((section, index) => ({
    id: index + 1,
    idName: section.id,
  }));

  if (sections) {
    sections.forEach((section, index) => {
      newIdArr.push({ id: index + 1, idName: section.id });
    });
  }

  if (tableOfContents) {
    const linkElements = tableOfContents.querySelectorAll("li a");
    linkElements.forEach((link) => {
      const href = link.getAttribute("href");
      if ("#" + activeSection === href) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    });
  }

  // On this page active section html
  const innerHtml = tableOfContents?.innerHTML;

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      for (const section of newIdArr) {
        const element = document.getElementById(section.idName);
        if (element) {
          const offsetTop = element.offsetTop;
          if (
            currentPosition >= offsetTop &&
            currentPosition < offsetTop + element.clientHeight
          ) {
            setActiveSection(section.idName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [newIdArr]);

  return (
    <div className="2xl:container pt-12 px-5">
      <div className="grid grid-cols-12 gap-5">
        <aside
          id="linkPage"
          className="lg:block hidden fixed top-11  z-20 pt-20 left-0 lg:w-[calc(100vw-75vw)] 2xl:w-[calc(100vw-75vw)] bg-white  overflow-y-auto h-screen border-r border-r-slate-100"
        >
          <div className="pr-3 space-y-3 w-56 ml-auto">
            <Accordion
              flush
              className="bg-transparent border-none"
              closeIcon={<CaretDown size={18} color="#000000e6" />}
              openIcon={<CaretUp size={18} color="#000000e6" />}
              iconPosition="right"
            >
              <Accordion.Panel>
                <Accordion.Title
                  theme={{
                    base: "flex w-full items-center text-left font-semibold text-sm leading-[22px] tracking-[-0.2px] text-black/100 hover:text-black",
                  }}
                >
                  Getting Started
                </Accordion.Title>
                <Accordion.Content
                  theme={{
                    base: "text-slate-500 font-normal",
                  }}
                >
                  <ul className="mt-3 space-y-2 border-l border-l-slate-100 -ml-px">
                    {gettingStartedRoutes.map((route) => (
                      <li key={route.id}>
                        <Link
                          className={`text-slate-500 text-sm -ml-px leading-[28px] tracking-[-0.2px]  pl-3 hover:text-slate-900 border-l border-l-transparent hover:border-l hover:-ml-px hover:border-slate-500 ${
                            IsActive(route.href)
                              ? "text-slate-900 border-l !border-slate-900 transition-all duration-150"
                              : ""
                          }`}
                          href={route.href}
                        >
                          {route.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion
              flush
              closeIcon={<CaretDown size={18} color="#000000e6" />}
              openIcon={<CaretUp size={18} color="#000000e6" />}
              iconPosition="right"
              className="bg-transparent border-none"
            >
              <Accordion.Panel>
                <Accordion.Title
                  theme={{
                    base: "flex w-full items-center text-left font-semibold text-sm leading-[22px] tracking-[-0.2px] text-black/100 hover:text-black",
                  }}
                >
                  Components
                </Accordion.Title>
                <Accordion.Content
                  theme={{
                    base: "",
                  }}
                >
                  <ul className="mt-3 space-y-2 border-l border-l-slate-100">
                    {routes.map((route) => (
                      <li key={route.id}>
                        <Link
                          className={`text-slate-500 text-sm -ml-px leading-[28px] tracking-[-0.2px]  pl-3 hover:text-slate-900 border-l border-l-transparent hover:border-l hover:-ml-px hover:border-slate-500 ${
                            IsActive(route.href)
                              ? "text-slate-900 border-l !border-slate-900 transition-all duration-150"
                              : ""
                          }`}
                          href={route.href}
                        >
                          {route.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </aside>
        <main className="lg:pl-[calc(100vw-75vw)] lg:w-[calc(100vw-5vw)]  md:w-[calc(100vw-10vw)] w-[calc(100vw-10vw)]  xl:pl-[calc(100vw-75vw)] xl:w-[calc(100vw-25vw)] 2xl:pl-[calc(100vw-85vw)] 2xl:w-[calc(100vw-35vw)]">
          <div className="overflow-y-auto px-4">{children}</div>
        </main>
        <aside
          id="linkPage"
          className="xl:block hidden fixed z-20 top-[48px] bottom-0 lg:w-[calc(100vw-80vw)] xl:w-[calc(100vw-82vw)] 2xl:w-[calc(100vw-86vw)] right-[max(0px,calc(50%-50rem))] pt-12 overflow-y-auto h-[calc(100vh-3rem)]"
        >
          <div className="right-0 flex-none pl-5">
            <div className="top-20 flex flex-col justify-between overflow-y-auto">
              <div className="mb-8">
                <h4 className="my-4 text-sm font-semibold uppercase tracking-[-0.2px] leading-[22px] text-black/100">
                  On this page
                </h4>
                <nav id="visible-table-of-contents">
                  <ul
                    dangerouslySetInnerHTML={{
                      __html: innerHtml ? innerHtml : "",
                    }}
                    className="border-l border-l-slate-100"
                  />
                </nav>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DocsLayout;
