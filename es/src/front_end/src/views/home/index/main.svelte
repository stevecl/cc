<script>
  // 接口请求

  let result = { data: [], count: 0 };
  let page = 1;

  async function getData(p) {
    if (typeof window === "undefined") return;
    const res = await fetch("http://localhost:3003/movie/all?page=" + p);
    result = await res.json();
    // console.log(result);
  }

  getData(page);
</script>

<div class=" p-1">
  <span class=" cursor-pointer text-red-600" on:click={() => getData(--page)}>
    &lt;
  </span>
  <span>第{page}页， 共{result.count}条</span>
  <span class=" cursor-pointer text-red-600" on:click={() => getData(++page)}>
    &gt;
  </span>
  <table class=" border-2 border-stone-800">
    <tr>
      <th class=" w-1/12">name</th>
      <th class=" w-1/12">season</th>
      <th class=" w-8/12">summary</th>
      <th class=" w-2/12">pic</th>
    </tr>
    {#each result.data as item}
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>S{item.season}E{item.number}</td>
        <td>{item.summary}</td>
        <td
          ><img
            alt="movie"
            width="200"
            height="150"
            src={item?.image?.medium || item?.image?.original}
          /></td
        >
      </tr>
    {/each}
  </table>
</div>
