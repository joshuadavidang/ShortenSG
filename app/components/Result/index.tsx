"use client";

import { CopyIcon } from "@radix-ui/react-icons";
import { copyText } from "@/helpers/copy";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Toaster, toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Result({ id }: any) {
  const handleCopyURL = (shortUrl: string) => {
    copyText(shortUrl);
    toast("Copied!");
  };

  const shortenedLinks = useSelector(
    (state: RootState) => state.shortenedLinks,
  );

  const { og_url, short_url }: any = shortenedLinks || {};

  return (
    <div
      className="w-screen md:w-10/12 px-6 pt-6 lg:relative lg:bottom-10"
      id={id}
    >
      <Table>
        <TableCaption>
          {short_url
            ? "Here is your shortened link!"
            : "Generate a short link above!"}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Original URL</TableHead>
            <TableHead className="text-right">Shortened URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow key={id}>
            <TableCell>{og_url}</TableCell>
            <TableCell className="flex justify-end items-center gap-3 text-right">
              <p>{short_url}</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CopyIcon
                      className="w-4 h-4 cursor-pointer"
                      onClick={() => handleCopyURL(short_url)}
                    />
                  </TooltipTrigger>
                  <TooltipContent>Click to Copy</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Toaster />
    </div>
  );
}
