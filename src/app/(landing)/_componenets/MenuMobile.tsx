import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as Collapsible from '@radix-ui/react-collapsible';
import SignInLink from './SignInLink';
import { siteConfig } from '@/lib/config';
import { Icons } from '@/components/shared/Icons';
import { useNavBar } from '@/components/context/NavBarContext';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: Icons.chartPie },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: Icons.cursorArraow },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: Icons.fingerPrint },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: Icons.squaresPlus },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: Icons.arrowPath },
];

export default function MenuMobile() {
  const { mobileMenuOpen, setMobileMenuOpen } = useNavBar();

  return (
    <DialogPrimitive.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <DialogPrimitive.Overlay className="fixed inset-0 z-10 bg-black/50" />
      <DialogPrimitive.Content className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <DialogPrimitive.Title className="sr-only">Mobile Menu</DialogPrimitive.Title>
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">{siteConfig.siteName}</span>
            <Icons.logo className="h-8 text-stone-700" />
          </a>
          <Button
            type="button"
            variant={"ghost"}
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <Icons.close aria-hidden="true" className="size-6" />
          </Button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Collapsible.Root>
                <Collapsible.Trigger className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Product
                  <Icons.chevronDown aria-hidden="true" className="size-5 flex-none data-[state=open]:rotate-180" />
                </Collapsible.Trigger>
                <Collapsible.Content className="mt-2 space-y-2">
                  {products.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </Collapsible.Content>
              </Collapsible.Root>
              <Link 
                title={'Features'}
                href="#" 
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Features
              </Link>
              <Link 
                title={'Pricing'}
                href="#" 
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >
                Pricing
              </Link>
            </div>
            <div className="py-6">
              <SignInLink />
            </div>
          </div>
        </div>
      </DialogPrimitive.Content>
    </DialogPrimitive.Root>
  );
}
