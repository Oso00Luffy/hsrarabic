---
description: |-
  A resident of the Underworld and the backbone of Wildfire. She goes by the alias "Babochka."
  She has a frank personality, but there is a delicate and sensitive hidden side to her deep in her heart.
---

import char from '@site/src/data/characters/Seele.json'

# Seele

import Image from '@theme/IdealImage'

<Image img={require('/img/characters/gacha/Seele.png')} alt="Seele's gacha art" />
<blockquote>{frontMatter.description}</blockquote>

## Resources

* TODO

## Base Stats

import CharStatsTable from '@site/src/components/char/CharStatsTable'

<CharStatsTable char={char} />

## Abilities

import Skill from '@site/src/components/char/Skill'

<Tabs>
<TabItem value='batk' label='Basic ATK'>
<Skill char={char} skill='batk' />

</TabItem>
<TabItem value='e' label='Skill'>
<Skill char={char} skill='e' />

</TabItem>
<TabItem value='q' label='Ultimate'>
<Skill char={char} skill='q'/>

</TabItem>
<TabItem value='t' label='Talent'>
<Skill char={char} skill='t'/>

</TabItem>
<TabItem value='p' label='Technique'>
<Skill char={char} skill='p'/>

</TabItem>
</Tabs>

## Traces

:::danger
TODO
:::

## Eidolon

import Eidolon from '@site/src/components/char/Eidolon'

<Tabs>
<TabItem value='E1' label='E1'>
<Eidolon char={char} eidolon={1} />

</TabItem>
<TabItem value='E2' label='E2'>
<Eidolon char={char} eidolon={2} />

</TabItem>
<TabItem value='E3' label='E3'>
<Eidolon char={char} eidolon={3} />

</TabItem>
<TabItem value='E4' label='E4'>
<Eidolon char={char} eidolon={4} />

</TabItem>
<TabItem value='E5' label='E5'>
<Eidolon char={char} eidolon={5} />

</TabItem>
<TabItem value='E6' label='E6'>
<Eidolon char={char} eidolon={6} />

</TabItem>
</Tabs>