'use client';
import * as React from 'react';
import Link from 'next/link';

import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

interface MainNavProps {
  items?: NavItem[];
}
export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link
            title="Go Home"
             href="/dashboard" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      {items?.length ? (
        <NavigationMenu >

      <NavigationMenuList>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.subItems && item.subItems.length > 0 ? (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul role="menu" className="grid w-[400px] list-none gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {item.subItems.map((subItem, subIndex) => (
                        <ListItem
                          role="menuitem"
                          key={subIndex}
                          title={subItem.title}
                          href={subItem.href}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem>
                <Link href={item?.href || '/login'} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                  {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              )}
            </React.Fragment>
          ))}

        </NavigationMenuList>
        </NavigationMenu>
      ) : null}
    </div>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
