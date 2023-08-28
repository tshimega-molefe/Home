import { FC } from "react"

interface CodeBlockProps {}

const CodeBlock: FC<CodeBlockProps> = ({}) => {
  return (
    <div className="flex-1 overflow-x-auto text-[16px]">
      <pre className="text-white">
        <pre className="text-white">
          <code>
            <span className="pl-e">class</span>&nbsp;
            <span className="text-yellow-500">SentimentAnalyser</span>&nbsp;
            <span className="text-yellow-500">(</span>
            <span className="pl-ent">models.Model</span>
            <span className="text-yellow-500">)</span>:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span>name</span>
            &nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">CharField</span>
            <span className="text-yellow-500">(</span>
            <span className="text-blue-500">max_length</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="pl-k">64</span>
            <span className="text-yellow-500">)</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span>trained_model</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">BinaryField</span>
            <span className="text-yellow-500">()</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="pl-e">def</span>
            &nbsp;<span className="pl-ent">predict_sentiment</span>
            <span className="text-yellow-500">(</span>
            <span className="text-green-200">self, text</span>
            <span className="text-yellow-500">)</span>:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="pl-e">if not</span>&nbsp;
            <span>
              <span className="text-blue-300">self</span>.trained_model:
            </span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="pl-e">raise</span>&nbsp;
            <span>ValueError</span>
            <span className="text-yellow-500">(</span>&quot;
            <span className="text-yellow-600">Model not trained yet</span>&quot;
            <span className="text-yellow-500">)</span>
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>model</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">pickle.</span>
            <span className="text-green-200">loads</span>
            <span className="text-yellow-500">(</span>
            <span className="text-blue-300">self</span>.trained_model
            <span className="text-yellow-500">)</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>sentiment</span>&nbsp;
            <span className="pl-e">=</span>&nbsp;
            <span className="text-white">models.</span>
            <span className="text-green-200">predict</span>
            <span className="text-yellow-500">(</span>
            <span className="pl-e">[</span>
            <span className="text-blue-300">text</span>
            <span className="pl-e">]</span>
            <span className="text-yellow-500">)</span>
            <span className="text-yellow-500">[</span>
            <span className="text-orange-700">0</span>
            <span className="text-yellow-500">]</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="pl-e">return</span>&nbsp;&quot;
            <span className="text-yellow-600">Positive</span>&quot;&nbsp;
            <span className="pl-e">if</span>&nbsp;sentiment&nbsp;
            <span className="pl-e">==</span>&nbsp;
            <span className="text-orange-700">1</span>&nbsp;
            <span className="pl-e">else</span>&nbsp;&quot;
            <span className="text-yellow-600">Negative</span>&quot;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-muted-foreground/80 dark:text-muted-foreground/40">
              #Complicated? We do the complicated stuff so you don&apos;t have
              to. Maybe you don&apos;t know how to bring your vision to life, or
              maybe you do! Work with us to make it a reality.
            </span>
            <br />
            <br />
          </code>
        </pre>
      </pre>
    </div>
  )
}

export default CodeBlock
