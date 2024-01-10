import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getData } from "@/api";
import { useEffect, useState } from "react";

export default function Result() {
  const [urls, setUrls] = useState([]);
  const handleCopyURL = () => {
    return;
  };
  useEffect(() => {
    const data = getData();
    data.then((res: any) => {
      setUrls(res.data);
    });
  }, []);

  return (
    <div className="w-screen md:w-1/2 px-6 pt-6">
      <Table>
        <TableCaption>Here are your shortened links</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Original URL</TableHead>
            <TableHead className="text-right">Shortened URL</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {urls?.map(({ id, ogUrl, shortUrl }) => (
            <TableRow key={id}>
              <TableCell>{ogUrl}</TableCell>
              <TableCell className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <p onClick={handleCopyURL}>{shortUrl}</p>
                    </TooltipTrigger>
                    <TooltipContent>Click to Copy</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
