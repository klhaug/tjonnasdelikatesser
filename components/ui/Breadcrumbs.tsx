import { clsx } from 'clsx';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <div className=' border-b border-b-grey-100 '>
      <nav aria-label="Breadcrumb" className=" p-6 lg:px-22 max-w-[1440px] m-auto block">
        <ol className={clsx('flex')}>
          {breadcrumbs.map((breadcrumb, index) => (
            <li
              key={breadcrumb.href}
              aria-current={breadcrumb.active}
              className={clsx(
                breadcrumb.active ? 'text-gray-900 font-semibold' : 'text-gray-500',
              )}
            >
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              {index < breadcrumbs.length - 1 ? (
                <span className="mx-3 inline-block">&gt;</span>
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
