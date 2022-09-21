import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { HelloworldAnchor } from "../target/types/helloworld_anchor";

describe("helloworld_anchor", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.HelloworldAnchor as Program<HelloworldAnchor>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
