<script lang="ts">
  import Button from '$lib/components/button.svelte';
  import { people } from '$lib/models/person.svelte';

  let onkeydown = (e: KeyboardEvent) => {
    const key = e.key;
    if (key.match(/^[0-9]{1}$/)) {
      let idx = parseInt(key);
      if (idx > 0) {
        const person = people[idx - 1];
        if (person) {
          person.speak();
        }
      }
    }
  };
</script>

<svelte:window {onkeydown} />

<div class="index">
  <div class="people">
    {#each people as person (person)}
      <Button label={person.name} onClick={() => person.speak()} />
    {/each}
  </div>
</div>

<style lang="scss">
  .index {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > .people {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }
</style>
