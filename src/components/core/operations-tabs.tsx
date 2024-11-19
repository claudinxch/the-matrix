import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Operation } from './operation'
import { OperationsTabsAnimation } from './operations-tabs-animation'

export function OperationsTabs() {
  return (
    <OperationsTabsAnimation>
      <Tabs defaultValue="sum" className="">
        <TabsList className="grid w-full grid-cols-2 grid-rows-2 h-fit md:grid-cols-4 md:grid-rows-1">
          <TabsTrigger value="sum" className="data-[state=active]:text-green">
            Adição
          </TabsTrigger>
          <TabsTrigger
            value="subtraction"
            className="data-[state=active]:text-green"
          >
            Subtração
          </TabsTrigger>
          <TabsTrigger
            value="multiplication"
            className="data-[state=active]:text-green"
          >
            Multiplicação
          </TabsTrigger>
          <TabsTrigger
            value="scalar"
            className="data-[state=active]:text-green"
          >
            Multiplicação por escalar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sum">
          <Operation operation="sum" />
        </TabsContent>

        <TabsContent value="subtraction">
          <Operation operation="subtraction" />
        </TabsContent>

        <TabsContent value="multiplication">
          <Operation operation="multiplication" />
        </TabsContent>

        <TabsContent value="scalar">
          <Operation operation="scalar" />
        </TabsContent>
      </Tabs>
    </OperationsTabsAnimation>
  )
}
